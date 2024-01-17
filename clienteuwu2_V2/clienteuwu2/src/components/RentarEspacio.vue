<template>
  <div>Rentar espacio
    <b-breadcrumb :items="items"></b-breadcrumb>
        <b-link :to="{ name: 'catalogo-de-espacios' }"> Siguiente</b-link>
  </div>
</template>

<script>
export default {
  data() {
        return {
            items: [
                {
                    text: "Inicio",
                    href: "#",
                    to: "inicio",
                },
                {
                    text: "Rentar espacio",
                    href: "#",
                },
            ],
        };
    },

}
</script>

<style>

</style>