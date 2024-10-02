import Chat from "./components/chat/Chat";

export const metadata = {
  title: "Off-Topic Chat - Join the Conversation!",
  description:
    "Engage in lively discussions and share your thoughts on Off-Topic Chat.",
  keywords: ["chat", "off-topic", "conversations", "discussions"],
  openGraph: {
    title: "Off-Topic Chat - Join the Conversation!",
    description:
      "Engage in lively discussions and share your thoughts on Off-Topic Chat.",
    url: "https://offtopic-alpha.vercel.app",
    images: [
      {
        url: "/icon.png",
        width: 800,
        height: 600,
        alt: "Off-Topic Chat",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Off-Topic Chat - Join the Conversation!",
    description: "Join Off-Topic Chat for interesting discussions.",
    images: ["/images/icon.webp"],
  },
};

export default function Home() {
  return (
    <>
      <main className="pt-16">
        <Chat />
      </main>
    </>
  );
}
