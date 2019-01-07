export const fruitMixin = {
    data() {
        return {
            fruits: ["Apple", "Banana", "Melon", "Grape"],
            filterText: ""
        };
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter(f =>
                f.toLowerCase().includes(this.filterText)
            );
        }
    },
    created() {
        console.log('created');
    }
};