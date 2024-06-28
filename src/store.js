import { createStore } from 'vuex';

const store = createStore({
state: {
    cart: [], 
    selectedProductId: null,
    selectedProduct: null,
    shippingFee: 0,
    totalPricePayment: 0,
    searchQuery: '',
}, mutations: {
    SET_SHIPPING_FEE(state, fee) {
        state.shippingFee = fee;
    },
    SET_TOTAL_PRICE_PAYMENT(state, price) {
        state.totalPricePayment = price;
    },
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
        if (state.selectedProduct) {
            state.selectedProduct.quantity = quantity;
        }
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
    SET_SELECTED_PRODUCT(state, product) {
        state.selectedProduct = product;
    },
    SET_SEARCH_QUERY(state, query) {
        state.searchQuery = query;
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
    removeFromCart({ commit }, productId) {
        commit('REMOVE_FROM_CART', productId);
    },
    setFavorite({ commit }, isFavorite) {
        commit('SET_FAVORITE', isFavorite);
    },
    setShippingFee({ commit }, fee) {
        commit('SET_SHIPPING_FEE', fee);
    },
    setTotalPricePayment({ commit }, price) {
        commit('SET_TOTAL_PRICE_PAYMENT', price);
    },
    setSearchQuery({ commit }, query) {
        commit('SET_SEARCH_QUERY', query);
    },
}, 
getters: {
    cartItems: (state) => state.cart,
    selectedProduct: (state) => state.selectedProduct,
    totalPrice: (state) => {
            return state.cart.reduce((total, item) => {
            return total + (item.price * item.quantity);
            }, 0);
        }
    },
    shippingFee: state => state.shippingFee,
    totalPricePayment: state => state.totalPricePayment,
    getSearchQuery(state) {
        return state.searchQuery;
    },
});

export default store;