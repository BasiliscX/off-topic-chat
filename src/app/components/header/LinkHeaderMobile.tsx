import Link from "next/link";

interface LinkHeaderMobileProps {
  text: string;
  linkref: string;
}

export default function LinkHeaderMobile({
  text,
  linkref,
}: LinkHeaderMobileProps) {
  return (
    <div className="px-2 pt-2 pb-3 space-y-1 text-center sm:px-3 hover:opacity-55">
      <Link href={linkref} legacyBehavior>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="block px-3 py-2 rounded-md text-base font-medium text-primary-foreground hover:bg-primary-foreground/10 card-2"
        >
          {text}
        </a>
      </Link>
    </div>
  );
}
