const WHATSAPP_NUMBER = "5527996584773"; // Número real da Luana

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const EDUZZ_CHECKOUT = "https://sun.eduzz.com/7977BGQ49E";
export const WHATSAPP_DUVIDA = whatsappLink("Olá! Tenho uma dúvida sobre o Método VDPF antes de comprar.");

export const WHATSAPP_CURSO = whatsappLink("Olá! Quero saber mais sobre o curso Método VDPF 🎨");
export const WHATSAPP_FESTA = whatsappLink("Olá! Quero contratar pintura facial para festa 🎉");
export const WHATSAPP_PDF = whatsappLink("Olá! Quero os PDFs para iniciantes 📚");
export const WHATSAPP_PLANO_BASICO = whatsappLink("Olá! Quero entrar no Curso Básico - Método VDPF 🎨");
export const WHATSAPP_PLANO_ESSENCIAL = whatsappLink("Olá! Quero entrar no Curso Método VDPF 🎨");
export const WHATSAPP_PLANO_VITALICIO = whatsappLink("Olá! Quero entrar no Curso Vitalício - Método VDPF 🎨");
