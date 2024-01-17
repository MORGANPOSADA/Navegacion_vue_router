<template>
  <div>Renta tu espacio
    <b-breadcrumb :items="items"></b-breadcrumb>
        <b-link :to="{ name: 'informacion-de-espacio' }"> Siguiente</b-link>
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
                    text: "Renta tu espacio",
                    href: "#",
                },
            ],
        };
    },
};
</script>

<style>

</style>