import { useId, useState, type ChangeEvent, type FormEvent } from 'react';

const TYPES = [
  'Partnership Inquiry',
  'Wholesale Purchase',
  'Aquaculture Supply',
  'Contract Partnership',
  'Other',
] as const;

type FormValues = {
  type: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

type FormField = keyof FormValues;
type FormErrors = Partial<Record<FormField, string>>;

const empty: FormValues = {
  type: '',
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
};

export default function ContactForm() {
  const formId = useId();
  const [values, setValues] = useState<FormValues>(empty);
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);

  const errorId = (field: FormField) => `${formId}-${field}-error`;

  const set =
    (field: FormField) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!values.type) next.type = 'Please select an inquiry type.';
    if (!values.name.trim()) next.name = 'Full name is required.';
    if (!values.email.trim()) next.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Invalid email format.';
    if (!values.phone.trim()) next.phone = 'Phone number is required.';
    if (!values.message.trim()) next.message = 'Message is required.';
    return next;
  };

  const fieldIds: Record<FormField, string> = {
    type: 'inquiry-type',
    name: 'full-name',
    company: 'company-name',
    email: 'email',
    phone: 'phone',
    message: 'message',
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = validate();
    if (Object.keys(next).length) {
      setErrors(next);
      setSuccess(false);
      const first = (Object.keys(next) as FormField[])[0];
      if (first) document.getElementById(fieldIds[first])?.focus();
      return;
    }
    setErrors({});
    setSuccess(true);
    setValues(empty);
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="inquiry-type">Inquiry Type</label>
        <select
          id="inquiry-type"
          name="type"
          value={values.type}
          onChange={set('type')}
          required
          aria-invalid={Boolean(errors.type)}
          aria-describedby={errors.type ? errorId('type') : undefined}
        >
          <option value="">Select inquiry type</option>
          {TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.type && (
          <p id={errorId('type')} className="field-error">
            {errors.type}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="full-name">Full Name</label>
        <input
          id="full-name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={set('name')}
          required
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? errorId('name') : undefined}
        />
        {errors.name && (
          <p id={errorId('name')} className="field-error">
            {errors.name}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="company-name">Company Name</label>
        <input
          id="company-name"
          name="company"
          type="text"
          autoComplete="organization"
          value={values.company}
          onChange={set('company')}
        />
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={set('email')}
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? errorId('email') : undefined}
          />
          {errors.email && (
            <p id={errorId('email')} className="field-error">
              {errors.email}
            </p>
          )}
        </div>
        <div className="field">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={set('phone')}
            required
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? errorId('phone') : undefined}
          />
          {errors.phone && (
            <p id={errorId('phone')} className="field-error">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={set('message')}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? errorId('message') : undefined}
        />
        {errors.message && (
          <p id={errorId('message')} className="field-error">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" className="btn btn-gold">
        Submit Inquiry
      </button>

      {success && (
        <p className="form-success" role="status">
          Thank you. Your inquiry has been received. Our team will respond within 1×24 business hours.
        </p>
      )}
    </form>
  );
}
