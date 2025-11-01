import { Instagram, Youtube, MessageCircle } from "lucide-react";

interface SocialLinksProps {
  instagramUrl: string;
  youtubeUrl: string;
  whatsappNumber: string; // e.g. "919876543210"
}

const SocialShareButtons: React.FC<SocialLinksProps> = ({
  instagramUrl,
  youtubeUrl,
  whatsappNumber,
}) => {
  return (
    <div className="flex items-center gap-6 justify-center py-4">
      {/* Instagram */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover:text-pink-600 transition-colors"
      >
        <Instagram size={28} />
      </a>

      {/* YouTube */}
      <a
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="hover:text-red-600 transition-colors"
      >
        <Youtube size={28} />
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="hover:text-green-600 transition-colors"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default SocialShareButtons;