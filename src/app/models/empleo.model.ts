export class Empleo {
    id_anuncio: number;
    nombre_anuncio: string;
    fecha_inicio_anuncio: string;
    // format: yyyy-mm-dd
    fecha_fin_anuncio: string; 
    remuneracion_anuncio : string;
    url_anuncio: string;
    formacion_anuncio: string;
    nrovacantes_anuncio: number;
    detalles_anuncio: string;
    direccion_anuncio: string;
    estado_anuncio: string;
    id_empresa: number;
    id_categoria: number;
    id_ciudad: number;
    id_usuario: number;
    constructor(id_anuncio: number, nombre_anuncio: string, fecha_inicio_anuncio: string, fecha_fin_anuncio: string, remuneracion_anuncio : string, url_anuncio: string, formacion_anuncio: string, nrovacantes_anuncio: number, detalles_anuncio: string,direccion_anuncio: string, estado_anuncio: string, id_empresa: number, id_categoria: number, id_ciudad: number, id_usuario: number) {
        this.id_anuncio = id_anuncio;
        this.nombre_anuncio = nombre_anuncio;
        this.fecha_inicio_anuncio = fecha_inicio_anuncio;
        this.fecha_fin_anuncio = fecha_fin_anuncio;
        this.remuneracion_anuncio = remuneracion_anuncio;
        this.url_anuncio = url_anuncio;
        this.formacion_anuncio = formacion_anuncio;
        this.nrovacantes_anuncio = nrovacantes_anuncio;
        this.detalles_anuncio = detalles_anuncio;
        this.direccion_anuncio = direccion_anuncio;
        this.estado_anuncio = estado_anuncio;
        this.id_empresa = id_empresa;
        this.id_categoria = id_categoria;
        this.id_ciudad = id_ciudad;
        this.id_usuario = id_usuario;
    }
}