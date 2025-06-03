export class NavDto {

    public label: string = '';
    public href: string = '';
    public icon: string = '';
    public title: string = '';
    public description: string = '';
    public isActive: boolean = false;
    public children: NavDto[] = [];
}
