import { company } from '../data/company';

export default function MapEmbed() {
  return (
    <div className="map-frame" role="region" aria-label="Office location map in Cakung, East Jakarta">
      <iframe
        title="PT Samudra Biru Indonesia office map in Cakung, East Jakarta"
        src={company.mapEmbed}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
