import { useState } from "react";

export default function CommentForm() {
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const encoded = new URLSearchParams({
      "form-name": "comments",
      ...formData,
    }).toString();

    const response = await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encoded,
    });

    if (response.ok) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      {submitted ? (
        <p>Thank you for your comment!</p>
      ) : (
        <form
          name="comments"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="comments" />
          <input
            type="text"
            name="name"
            placeholder="Your Name (optional)"
            onChange={handleChange}
          />
          <textarea
            name="comment"
            placeholder="Your Comment"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
