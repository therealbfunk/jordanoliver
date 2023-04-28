import '/styles/style.css'
import '/styles/components/header.css'
import '/styles/components/hero.css'
import '/styles/components/about.css'
import '/styles/components/gallery.css'
import '/styles/components/events.css'
import '/styles/components/contact.css'
import '/styles/components/footer.css'
import '/styles/utils.css';

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
