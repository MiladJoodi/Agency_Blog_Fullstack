import styles from "./postUserSkeleton.module.css"

const PostUserSkeleton = () => {
    return (
        <div className={styles.container}>
            <div className={styles.skeleton}>
                {/* loading */}
            </div>
            <div className={styles.skeleton}>
                {/* loading */}
            </div>
        </div>
    );
}

export default PostUserSkeleton;