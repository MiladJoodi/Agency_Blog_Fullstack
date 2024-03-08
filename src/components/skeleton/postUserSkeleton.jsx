import styles from "./postUserSkeleton.module.css"

const PostUserSkeleton = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}></div>
            <div className={styles.texts}>
                <div className={styles.skeleton}>
                    {/* loading */}
                </div>
                <div className={styles.skeleton}>
                    {/* loading */}
                </div>
            </div>
        </div>
    );
}

export default PostUserSkeleton;