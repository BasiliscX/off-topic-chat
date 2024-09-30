/**
 * Fetches messages from the server.
 * Optionally filters messages by tag_id.
 * @param {number} [tag_id=0] - The tag ID for filtering messages.
 * @returns {Promise<Array<{content: string, createdAt: Date, nickname: string, tag_id: number}>>}
 * A promise that resolves to an array of message objects.
 */
export const getMessages = async (tag_id = 0) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/messages?tag_id=${tag_id}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};

/**
 * Sends a new message to the server.
 * @param {string} content - The content of the message to send.
 * @param {string} nickname - The nickname of the user sending the message.
 * @param {number} tag_id - The tag ID for the message.
 * @returns {Promise<Object>} A promise that resolves to the sent message object.
 */
export const postMessage = async (
  content: string,
  nickname: string,
  tag_id: number = 0
) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content, nickname, tag_id }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};
