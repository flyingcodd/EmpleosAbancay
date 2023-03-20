export class Empresa {
    id_empresa: number;
    nombre_empresa: string;
    url_empresa: string;
    img_empresa: string;
    verificacion_empresa: string;
    estado_empresa: string;
    constructor(id_empresa: number, nombre_empresa: string, url_empresa: string, img_empresa: string, verificacion_empresa: string, estado_empresa: string) {
        this.id_empresa = id_empresa;
        this.nombre_empresa = nombre_empresa;
        this.url_empresa = url_empresa;
        this.img_empresa = img_empresa;
        this.verificacion_empresa = verificacion_empresa;
        this.estado_empresa = estado_empresa;
    }
}