import { useEffect } from 'react';
import {  Mail, ExternalLink } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  // Prevenir scroll en background cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const toEmail = "info@gimenezwebfixer.com";
  const ccEmail = "sebastiangimenezlopezen@gmail.com";
  const subject = encodeURIComponent("Consulta desde Portfolio 2026");

  const mailtoUrl = `mailto:${toEmail}?cc=${ccEmail}&subject=${subject}`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md bg-white border border-neutral-300 p-6 md:p-8 text-neutral-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-neutral-500 hover:text-black text-xs font-mono tracking-wider border border-neutral-300 px-3 py-1.5 hover:border-black transition-all"
        >
          CERRAR [ESC]
        </button>

        {/* Encabezado */}
        <div className="mb-6 pr-16">
          <div className="w-10 h-10 rounded-none bg-black flex items-center justify-center mb-4">
            <Mail className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-2xl font-light text-black tracking-tight uppercase">
            Contacto <span className="text-neutral-400">Directo</span>
          </h3>
          <p className="text-sm font-light text-neutral-600 mt-2 leading-relaxed">
            Envía tu consulta directamente a nuestro correo o utiliza tu app de correo predeterminada.
          </p>
        </div>

        {/* Cajas de Direcciones */}
        <div className="space-y-3 mb-8 p-4 bg-neutral-100 border-l-2 border-black text-xs">
          <div>
            <span className="text-neutral-400 font-mono uppercase tracking-widest block mb-0.5">Destino Principal:</span>
            <span className="font-mono text-black font-medium text-sm">info@gimenezwebfixer.com</span>
          </div>
          <div>
            <span className="text-neutral-400 font-mono uppercase tracking-widest block mb-0.5">Copia de Notificación:</span>
            <span className="font-mono text-neutral-600">sebastiangimenezlopezen@gmail.com</span>
          </div>
        </div>

        {/* Botón Mailto */}
        <a
          href={mailtoUrl}
          onClick={onClose}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-black text-white text-xs font-mono tracking-widest uppercase hover:bg-neutral-800 transition-colors font-medium"
        >
          <span>Enviar Mail desde tu Correo</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}