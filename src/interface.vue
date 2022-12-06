
<template>
    <div>
    <input
      v-on="val"
      @change="onChange" />
  </div>
    <div class="human-readable-id">
        <v-input v-on="value" disabled>
            <template #prepend>
                <v-icon name="perm_identity" />
            </template>
        </v-input>
        <v-button @click="edit" icon><v-icon name="edit" /></v-button>
        <v-button @click="refresh" icon><v-icon name="refresh" /></v-button>
    </div>

    <v-dialog v-on="editActive" @esc="editActive = false" >
        <v-card>
            <v-card-title>Choose the components of the ID</v-card-title>
            <v-card-text>
                <table style="width: 100%; border: 0">
                    <tr>
                        <td><strong>Number</strong></td>
                        <td><v-select v-on="editNumber" :items="numbers.map((v) => { return {text: v, value: v} })" allow-other /></td>
                    </tr>
                    <tr>
                        <td><strong>Symbol</strong></td>
                        <td><v-select v-on="editSymbol" :items="symbols.map((v) => { return {text: v, value: v} })" allow-other /></td>
                    </tr>
                    <tr>
                        <td><strong>Letter</strong></td>
                        <td><v-select v-on="editLetter" :items="letters.map((v) => { return {text: v, value: v} })" allow-other /></td>
                    </tr>
                </table>
            </v-card-text>
            <v-card-actions>
                <v-button @click="editActive = false" outlined>Cancel</v-button>
                <v-button @click="save">Save</v-button>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <SomeComponent :modelValue="thing" @update:modelValue="handleThingUpdate" />
</template>

<script>
    import { numbers, symbols, letters, generate } from './hri';

    
    export default {
        props: {
            value: {
                type: String,
                default: null,
            }
        },

        data: function() {
            return {
                delim: '-',
                numbers: numbers,
                symbols: symbols,
                letters: letters,
                editActive: false,
                editNumber: undefined,
                editSymbol: undefined,
                editLetter: undefined
            }
        },
        
        emits: ['input'],
        
        mounted: function() {
            if ( !this.value ) {
                let init = generate(this.delim);
                this.$emit('input', init);
            }
        },

        methods: {

            /**
             * Manually choose the components of the id
             */
            edit: function() {
                if ( this.value ) {
                    let parts = this.value.split(this.delim);
                    if ( parts.length === 3 ) {
                        this.editNumber = parts[0];
                        this.editSymbol = parts[1];
                        this.editLetter = parts[2];
                    }
                }
                this.editActive = true;
            },

            save: function() {
                let value = [this.editNumber, this.editSymbol, this.editLetter].join(this.delim);
                this.$emit('input', value);
                this.editActive = false;
            },

            /**
             * Get a new human-readable-id for the value
             */
            refresh: function() {
                let value = generate(this.delim);
                this.$emit('input', value);
            }

        }
    };
    
</script>


<style scoped>
    .human-readable-id {
        display: flex;
        justify-content: space-between;
        gap: 15px;
    }
</style>