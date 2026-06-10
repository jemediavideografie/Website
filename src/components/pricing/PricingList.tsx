"use client";

import { useState } from "react";

export type Package = {
  id: string;
  name: string;
  base: number;
  hourly: number;
  includes: string[];
  special?: {
    label: string;
    price: number;
    pricePrefix?: string;
    note: string;
  };
};

export type Addon = { name: string; price: string };

export function PricingList({ packages, addons }: { packages: Package[]; addons: Addon[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <>
      <div className="pricing-list">
        {packages.map((pkg) => {
          const isOpen = openId === pkg.id;
          const panelId = `pricing-panel-${pkg.id}`;
          return (
            <div
              key={pkg.id}
              className="pricing-item"
              data-open={isOpen ? "true" : "false"}
            >
              <button
                type="button"
                className="pricing-summary"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(pkg.id)}
              >
                <span className="pricing-num">{pkg.id}</span>
                <span className="pricing-name">{pkg.name}</span>
                <span className="pricing-price">
                  {pkg.base},– + {pkg.hourly},–/h
                </span>
              </button>
              <div
                id={panelId}
                className="pricing-panel"
                role="region"
                aria-label={pkg.name}
              >
                <ul className="pricing-includes">
                  {pkg.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {pkg.special && (
                  <div className="pricing-special">
                    <p className="pricing-special-title">
                      Option: {pkg.special.label}
                    </p>
                    <p className="pricing-special-price">
                      {pkg.special.pricePrefix}{pkg.special.price.toLocaleString("de-DE")},– €
                    </p>
                    <p className="pricing-special-note">{pkg.special.note}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="pricing-addons">
        <h3>Weitere Leistungen</h3>
        <div className="pricing-addons-list">
          {addons.map((addon) => (
            <div key={addon.name} className="pricing-addon-row">
              <span className="pricing-addon-name">{addon.name}</span>
              <span className="pricing-addon-price">{addon.price}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
