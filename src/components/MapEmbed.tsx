import { company } from '../data/company';

export default function MapEmbed() {
  return (
    <div className="map-frame" role="region" aria-label="Peta lokasi kantor di Cakung, Jakarta Timur">
      <iframe
        title="Peta kantor PT Samudra Biru Indonesia di Cakung, Jakarta Timur"
        src={company.mapEmbed}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
