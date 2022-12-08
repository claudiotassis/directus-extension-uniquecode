
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
                        <td><strong>First</strong></td>
                        <td><v-select v-on="editFirst" :items="firsts.map((v) => { return {text: v, value: v} })" allow-other /></td>
                    </tr>
                    <tr>
                        <td><strong>Second</strong></td>
                        <td><v-select v-on="editSecond" :items="seconds.map((v) => { return {text: v, value: v} })" allow-other /></td>
                    </tr>
                    <tr>
                        <td><strong>Third</strong></td>
                        <td><v-select v-on="editThird" :items="thirds.map((v) => { return {text: v, value: v} })" allow-other /></td>
                    </tr>
                    <tr>
                        <td><strong>Fourth</strong></td>
                        <td><v-select v-on="editFourth" :items="fourths.map((v) => { return {text: v, value: v} })" allow-other /></td>
                    </tr>
                    <tr>
                        <td><strong>Fifth</strong></td>
                        <td><v-select v-on="editFifth" :items="fifths.map((v) => { return {text: v, value: v} })" allow-other /></td>
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
    import { firsts, seconds, thirds, fourths, fifths, generate } from './hri';

    
    export default {
        props: {
            value: {
                type: String,
                default: null,
            }
        },

        data: function() {
            return {
                
                firsts: firsts,
                seconds: seconds,
                thirds: thirds,
                fourths: fourths,
                fifths: fifths,
                editActive: false,
                editNumber: undefined,
                editSymbol: undefined,
                editLetter: undefined
            }
        },
        
        emits: ['input'],
        
        mounted: function() {
            if ( !this.value ) {
                let init = generate();
                this.$emit('input', init);
            }
        },

        methods: {

            /**
             * Manually choose the components of the id
             */
           
            save: function() {
                let value = [this.editFirst, this.editSecond, this.editThird, this.editFourth, this.editFifth].join();
                this.$emit('input', value);
                this.editActive = false;
            },

            /**
             * Get a new human-readable-id for the value
             */
            refresh: function() {
                let value = generate();
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