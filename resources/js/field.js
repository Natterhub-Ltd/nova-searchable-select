import SearchInput from './components/SearchInput.vue';
import IndexField from './components/IndexField.vue';
import DetailField from './components/DetailField.vue';
import FormField from './components/FormField.vue';

Nova.booting((app, store) => {
    app.component('input-searchable-select', SearchInput);
    app.component('index-searchable-select', IndexField);
    app.component('detail-searchable-select', DetailField);
    app.component('form-searchable-select', FormField);
})
