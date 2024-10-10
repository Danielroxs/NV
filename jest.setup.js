import '@testing-library/jest-dom'; // Extiende Jest con matchers para testing del DOM

// Mock de IntersectionObserver para las pruebas
class IntersectionObserver {
    constructor(callback) {
        this.callback = callback;
    }

    observe() {
        this.callback([{ isIntersecting: true }]);
    }

    unobserve() { }

    disconnect() { }
}

global.IntersectionObserver = IntersectionObserver;

