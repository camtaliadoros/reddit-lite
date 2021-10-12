export const timeElapsed = time => {
    const elapsedSecs = (Date.now() - time) / 1000;
    if (elapsedSecs < 60) {
        return `${Math.floor(elapsedSecs)} secs ago`;
    } else if (elapsedSecs >= 60 && elapsedSecs < 3600) {
        const elapsedMins = Math.floor(elapsedSecs / 60);

        if (elapsedMins === 1) {
            return `${elapsedMins} min ago`
        }

        return `${elapsedMins} mins ago`

    } else if (elapsedSecs >= 3600) {
        const elapsedHours = Math.floor(elapsedSecs / 3600);

        if(elapsedHours === 1) {
            return `${elapsedHours} hour ago`
        }

        return `${elapsedHours} hours ago`
    }
} 