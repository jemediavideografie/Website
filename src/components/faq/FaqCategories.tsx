"use client";

import { useEffect, useRef, useState } from "react";
import { faqContent } from "@/lib/content";

const tabs = [
  { key: "allgemein", label: "Allgemein" },
  { key: "hochzeit", label: "Hochzeit" },
  { key: "automotive", label: "Automotive" },
] as const;

export function FaqCategories() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["key"]>("allgemein");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const prevOpenQuestionRef = useRef<string | null>(null);

  useEffect(() => {
    setOpenQuestion(null);
  }, [activeTab]);

  useEffect(() => {
    prevOpenQuestionRef.current = openQuestion;
  }, [openQuestion]);

  return (
    <section className="section">
      <div className="container">
        <h1>Häufige Fragen</h1>
        <p className="muted faq-intro">
          Wähle eine Kategorie und klappe die Fragen auf, um die passenden Antworten zu sehen.
        </p>
        <div className="tab-row" role="tablist" aria-label="FAQ Kategorien">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={`tab ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
              role="tab"
              aria-selected={activeTab === tab.key}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="faq-list" role="region" aria-label="FAQ Inhalte">
          {faqContent[activeTab].map((item, idx) => {
            const isOpen = openQuestion === item.question;
            const prevOpen = prevOpenQuestionRef.current;
            const isOpening = isOpen && prevOpen !== item.question;
            const isClosing = !isOpen && prevOpen === item.question;
            const panelId = `faq-panel-${activeTab}-${idx}`;
            return (
              <div key={item.question} className="faq-item" data-open={isOpen ? "true" : "false"}>
                <button
                  type="button"
                  className="faq-summary"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => {
                    setOpenQuestion((prev) => (prev === item.question ? null : item.question));
                  }}
                >
                  {item.question}
                </button>
                <div
                  id={panelId}
                  className={[
                    "faq-panel",
                    isOpening ? "faq-panel--opening" : "",
                    isClosing ? "faq-panel--closing" : "",
                  ].join(" ")}
                  role="region"
                  aria-label={item.question}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

