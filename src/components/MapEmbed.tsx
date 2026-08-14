import { useState } from 'react';
import { company } from '../data/company';

export default function MapEmbed() {
  const [active, setActive] = useState(false);

  return (
    <div className="map-frame">
      {active ? (
        <iframe
          title="Peta kantor PT Samudra Biru Indonesia di Cakung, Jakarta Timur"
          src={company.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <button type="button" className="map-facade" onClick={() => setActive(true)}>
          <span className="map-facade-title">Tampilkan peta</span>
          <span className="map-facade-hint">{company.address.full}</span>
        </button>
      )}
    </div>
  );
}
