<template>
  <div>Catalogo de espacios
    <b-breadcrumb :items="items"></b-breadcrumb>
        <b-link :to="{ name: 'detalles-de-espacio' }"> Siguiente</b-link>
  </div>
</template>

<script>
export default {
  data(){
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
                    to: "rentar-espacio",
                },
                {
                    text: "Catalogo de espacios",
                    href: "#",
                    to: "catalogo-de-espacios",
                },
                
            ],
        };
  }

}
</script>

<style>

</style>