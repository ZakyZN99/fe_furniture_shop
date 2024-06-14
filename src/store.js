import { createStore } from 'vuex';

const store = createStore({
state: {
    cart: [], 
    selectedProductId: null,
    selectedProduct: null,
}, mutations: {
    ADD_TO_CART(state, product) {
        const existingProduct = state.cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += product.quantity;
        } else {
            state.cart.push({ ...product });
        }
    },
    REMOVE_FROM_CART(state, productId) {
        state.cart = state.cart.filter(item => item.id !== productId);
    },
    SET_SIZE(state, size) {
        state.selectedProduct.size = size;
    },
    SET_QUANTITY(state, quantity) {
        state.selectedProduct.quantity = quantity;
    },
    UPDATE_QUANTITY(state, { productId, quantity }) {
        const product = state.cart.find(item => item.id === productId);
        if (product) {
            product.quantity = quantity;
        }
    },
    SET_FAVORITE(state, isFavorite) {
        state.selectedProduct.isFavorite = isFavorite;
    },
},
actions: {
    addToCart({ commit }, product) {
        commit('ADD_TO_CART', product);
    },
    setSize({ commit }, size) {
        commit('SET_SIZE', size);
    },
    setQuantity({ commit }, quantity) {
        commit('SET_QUANTITY', quantity);
    },
    updateQuantity({ commit }, payload) {
        commit('UPDATE_QUANTITY', payload);
    },
    setFavorite({ commit }, isFavorite) {
        commit('SET_FAVORITE', isFavorite);
    },
}, 
getters: {
    cartItems: (state) => state.cart,
    selectedProduct: (state) => state.selectedProduct
    }
});

export default store;