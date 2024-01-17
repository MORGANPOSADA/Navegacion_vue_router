<template>
  <div>Informacion de espacio
    <b-breadcrumb :items="items"></b-breadcrumb>
        <b-link :to="{ name: 'ofertar-espacio' }"> Siguiente</b-link>
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
                    text: "Renta tu espacio",
                    href: "#",
                    to: "renta-tu-espacio",
                },
                {
                    text: "Informacion de espacio",
                    href: "#",
                    to: "informacion-de-espacio",
                },
                
            ],
        };
  }

}
</script>

<style>

</style>