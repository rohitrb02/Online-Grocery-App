export class Category {
    categoryId:number=0;
    categoryName:string="";
    categoryImage?:string="";

    constructor(categoryId:number,categoryName:string,categoryImage:string){
        this.categoryId=categoryId;
        this.categoryName=categoryName;
        this.categoryImage=categoryImage;
    }
}
