import Image from "next/image";
import styles from "./contact.module.css"

export const metadata = {
    title: "Create Next Contact page",
    description: "Contact Description",
  };

const ContactPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/contact.png" fill alt="" className={styles.img} />
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <input type="text" placeholder="Name and Surname" />
                    <input type="text" placeholder="Email Address" />
                    <input type="text" placeholder="Phone Number (Optional)" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    );
}

export default ContactPage;