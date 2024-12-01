import "./Styles/ContactForm.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Messsage" rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
