export const textLengthMixin = {
    computed: {
        showStringAndLength() {
            return `${this.text} (${this.text.length})`;
        }
    }
};