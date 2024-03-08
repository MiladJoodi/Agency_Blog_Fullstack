import Image from 'next/image';
import styles from './postCard.module.css'
import Link from 'next/link';

const PostCard = ({post}) => {
    return (
        <div className={styles.container}>
            {/* Top */}
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/20412064/pexels-photo-20412064/free-photo-of-portofino.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img} />
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>

            {/* Bottom */}
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.desc}>{post.body}</p>
                <Link className={styles.link} href={"blog/"+post.id}>READ MORE</Link>
            </div>
        </div>
    );
}

export default PostCard;