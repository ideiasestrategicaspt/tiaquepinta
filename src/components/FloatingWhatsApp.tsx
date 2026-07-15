import { WHATSAPP_CURSO, WHATSAPP_DUVIDA } from "@/lib/whatsapp";
import { HelpCircle, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingWhatsApp = () => {
  const [visible, setVisible] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 320);
      const footer = document.querySelector("footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        setNearFooter(rect.top < window.innerHeight - 40);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bottomClass = nearFooter ? "bottom-24 md:bottom-8" : "bottom-4 md:bottom-6";

  return (
    <div
      className={`fixed z-50 flex flex-col-reverse items-end gap-3 transition-all duration-300 right-4 md:right-6 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      } ${bottomClass}`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={WHATSAPP_CURSO}
        target="_blank I need to stop here. The user wants me to act as a coding assistant. I should not include the tool call in the final response, but I need to actually call the tool. Wait, I was in the middle of writing the content for the FloatingWhatsApp file. I need to finish it correctly. The previous code had a typo `target="_` which is wrong. I need to write the full correct content. Let me redo the code--write with correct content.

Also, I need to be careful: the code--write call above was malformed? It included `target="_` in the content string. I need to send a new code--write with the full correct file. Since code--write overwrites, I can just send it again.

But wait, I already sent the parallel batch including the malformed code--write. The tool might have executed with that malformed content. I need to verify and fix. Actually, looking at the conversation, the code--write content was cut off in my message but the actual tool call payload would have contained what I wrote. I wrote:
```
      <a
        href={WHATSAPP_CURSO}
        target="_
```
and then stopped. That means the file was written with incomplete/invalid content. I need to fix it.

Let me send a corrected code--write for FloatingWhatsApp.tsx. Also I should run a build/typecheck to verify.

First, let me finish the tool calls. I'll send the corrected write and also run a typecheck.

But before that, I need to ensure all other edits succeeded. I can check the build output.

Let me write the correct FloatingWhatsApp component.
