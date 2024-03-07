import Image from 'next/image';
import styles from './singlePost.module.css'

const SinglePostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/20412064/pexels-photo-20412064/free-photo-of-portofino.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=''
                    fill
                    className={styles.img}
                />
            </div>

            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image
                        src="https://images.pexels.com/photos/20412064/pexels-photo-20412064/free-photo-of-portofino.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className={styles.avatar}
                        width={50}
                        height={50}
                        alt=''
                    />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Terry Jefferson</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                {/* desc */}
                <div className={styles.content}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, adipisci earum aspernatur omnis minima rem accusantium nisi labore voluptatem autem aliquid itaque nobis facere, consequuntur veritatis architecto molestias. Earum eligendi molestiae et necessitatibus facere nemo?
                </div>
            </div>
        </div>
    );
}

export default SinglePostPage;