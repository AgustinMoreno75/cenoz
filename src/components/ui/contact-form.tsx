"use client";

import { useState } from "react";

import { buildMailtoLink, products } from "@/data/site";
import { buttonStyles } from "@/lib/theme";
import { cn } from "@/lib/utils";

type FormValues = {
  companyName: string;
  cuit: string;
  contactName: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  companyName: "",
  cuit: "",
  contactName: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

const inputClassName =
  "w-full rounded-[18px] border border-slate-900/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[rgba(252,62,48,0.15)]";

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (nextValues: FormValues) => {
    const nextErrors: FormErrors = {};
    const cuitDigits = nextValues.cuit.replace(/\D/g, "");

    if (!nextValues.companyName.trim()) {
      nextErrors.companyName = "Indicá la razón social o el nombre de la empresa.";
    }

    if (!nextValues.cuit.trim()) {
      nextErrors.cuit = "Indicá el CUIT de la empresa.";
    } else if (cuitDigits.length !== 11) {
      nextErrors.cuit = "Ingresá un CUIT válido de 11 dígitos.";
    }

    if (!nextValues.contactName.trim()) {
      nextErrors.contactName = "Indicá el nombre y apellido de quien consulta.";
    }

    if (!nextValues.phone.trim()) {
      nextErrors.phone = "Indicá un teléfono de contacto.";
    }

    if (!nextValues.email.trim()) {
      nextErrors.email = "Indicá un email.";
    } else if (!/^\S+@\S+\.\S+$/.test(nextValues.email)) {
      nextErrors.email = "Ingresá un email válido.";
    }

    if (!nextValues.service.trim()) {
      nextErrors.service = "Seleccioná el servicio de interés.";
    }

    if (nextValues.message.trim().length < 20) {
      nextErrors.message = "Contanos un poco más sobre lo que necesitás.";
    }

    return nextErrors;
  };

  const handleFieldChange = (
    field: keyof FormValues,
    value: string,
  ) => {
    setSubmitted(false);
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const emailBody = [
      "Hola CENOZ, quiero realizar una consulta comercial.",
      `Razón social / Empresa: ${values.companyName}`,
      `CUIT: ${values.cuit}`,
      `Nombre y apellido: ${values.contactName}`,
      `Teléfono: ${values.phone}`,
      `Email: ${values.email}`,
      `Servicio de interés: ${values.service}`,
      `Detalle: ${values.message}`,
    ];

    window.location.href = buildMailtoLink("Consulta desde el sitio web", emailBody);
    setSubmitted(true);
    setValues(initialValues);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-800">
          Razón social / Nombre de la empresa
          <input
            type="text"
            name="companyName"
            value={values.companyName}
            onChange={(event) => handleFieldChange("companyName", event.target.value)}
            className={cn(inputClassName, errors.companyName && "border-red-300 focus:ring-red-100")}
            aria-invalid={Boolean(errors.companyName)}
            aria-describedby={errors.companyName ? "error-companyName" : undefined}
            placeholder="Ej. Constructora del Sur S.A."
          />
          {errors.companyName ? (
            <span id="error-companyName" className="text-sm text-red-600">
              {errors.companyName}
            </span>
          ) : null}
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-800">
          CUIT de la empresa
          <input
            type="text"
            name="cuit"
            value={values.cuit}
            onChange={(event) => handleFieldChange("cuit", event.target.value)}
            className={cn(inputClassName, errors.cuit && "border-red-300 focus:ring-red-100")}
            aria-invalid={Boolean(errors.cuit)}
            aria-describedby={errors.cuit ? "error-cuit" : undefined}
            placeholder="Ej. 30-12345678-9"
          />
          {errors.cuit ? (
            <span id="error-cuit" className="text-sm text-red-600">
              {errors.cuit}
            </span>
          ) : null}
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-800">
          Nombre y apellido
          <input
            type="text"
            name="contactName"
            value={values.contactName}
            onChange={(event) => handleFieldChange("contactName", event.target.value)}
            className={cn(inputClassName, errors.contactName && "border-red-300 focus:ring-red-100")}
            aria-invalid={Boolean(errors.contactName)}
            aria-describedby={errors.contactName ? "error-contactName" : undefined}
            placeholder="Ej. Juan Pérez"
          />
          {errors.contactName ? (
            <span id="error-contactName" className="text-sm text-red-600">
              {errors.contactName}
            </span>
          ) : null}
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-800">
          Teléfono
          <input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={(event) => handleFieldChange("phone", event.target.value)}
            className={cn(inputClassName, errors.phone && "border-red-300 focus:ring-red-100")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "error-phone" : undefined}
            placeholder="Ej. +54 9 291..."
          />
          {errors.phone ? (
            <span id="error-phone" className="text-sm text-red-600">
              {errors.phone}
            </span>
          ) : null}
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-800">
          Email
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={(event) => handleFieldChange("email", event.target.value)}
            className={cn(inputClassName, errors.email && "border-red-300 focus:ring-red-100")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "error-email" : undefined}
            placeholder="Ej. compras@empresa.com"
          />
          {errors.email ? (
            <span id="error-email" className="text-sm text-red-600">
              {errors.email}
            </span>
          ) : null}
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-800">
          Producto o servicio de interés
          <select
            name="service"
            value={values.service}
            onChange={(event) => handleFieldChange("service", event.target.value)}
            className={cn(inputClassName, errors.service && "border-red-300 focus:ring-red-100")}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "error-service" : undefined}
          >
            <option value="">Seleccionar opción</option>
            {products.map((product) => (
              <option key={product.slug} value={product.title}>
                {product.title}
              </option>
            ))}
          </select>
          {errors.service ? (
            <span id="error-service" className="text-sm text-red-600">
              {errors.service}
            </span>
          ) : null}
        </label>
      </div>

      <label className="space-y-2 text-sm font-medium text-slate-800">
        Contanos qué necesitás
        <textarea
          name="message"
          value={values.message}
          onChange={(event) => handleFieldChange("message", event.target.value)}
          className={cn(
            inputClassName,
            "min-h-36 resize-y",
            errors.message && "border-red-300 focus:ring-red-100",
          )}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "error-message" : undefined}
          placeholder="Ej. Necesito información sobre trailers petroleros y módulos portátiles para una operación en Bahía Blanca."
        />
        {errors.message ? (
          <span id="error-message" className="text-sm text-red-600">
            {errors.message}
          </span>
        ) : null}
      </label>

      <div className="space-y-3">
        <button type="submit" className={cn(buttonStyles.primary, "w-full justify-center sm:w-auto")}>
          Preparar email con la consulta
        </button>
        <p className="text-sm leading-7 text-[var(--color-muted)]">
          Al enviar, se abrirá tu cliente de correo con los datos de la empresa y de la consulta listos para revisar y mandar.
        </p>
      </div>

      <div aria-live="polite">
        {submitted ? (
          <div className="rounded-[22px] bg-[var(--color-accent-soft)] px-4 py-3 text-sm font-medium text-[var(--color-accent-strong)]">
            Preparamos el email con los datos cargados. Si querés, podés ajustar el mensaje antes de enviarlo.
          </div>
        ) : null}
      </div>
    </form>
  );
}