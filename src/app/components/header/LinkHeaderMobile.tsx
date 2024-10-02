import Link from "next/link";

interface LinkHeaderMobileProps {
  text: string;
  href: string;
}

export default function LinkHeaderMobile({
  text,
  href = "/",
}: LinkHeaderMobileProps) {
  return (
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <Link
        href={href}
        className="block px-3 py-2 rounded-md text-base text-center font-medium text-primary-foreground card-2 hover:opacity-80"
      >
        {text}
      </Link>
    </div>
  );
}
