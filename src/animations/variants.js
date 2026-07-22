// src/animations/variants.js

export const transitionConfig = {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
};

export const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

export const itemVariants = {
    hidden: {
        opacity: 0,
        y: 12,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: transitionConfig,
    },
};

export const visualVariants = {
    hidden: {
        opacity: 0,
        scale: 0.96,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            ...transitionConfig,
            delay: 0.3,
        },
    },
};

/* --- ADD THESE BELOW FOR THE TERMINAL --- */

// Terminal output lines streaming in
export const terminalLineVariants = {
    hidden: {
        opacity: 0,
        x: -6,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};

// Smooth infinite float for floating elements
export const floatAnimation = {
    animate: {
        y: [0, -6, 0],
    },
    transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
    },
};