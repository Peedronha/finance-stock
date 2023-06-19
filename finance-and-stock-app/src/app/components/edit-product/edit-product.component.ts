// import { Component, OnInit } from '@angular/core';
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import {HomeService} from "../../services/home/home.service";
// import {Product} from "../../model/product.model";
//
// @Component({
//   selector: 'app-edit-Product',
//   templateUrl: './edit-Product.component.html',
//   styleUrls: ['./edit-Product.component.scss']
// })
// export class EditProductComponent implements OnInit {
//
//   selectedProduct: Product;
//   editForm: FormGroup;
//   isLoading = false;
//   constructor(public modal: NgbActiveModal, private route: ActivatedRoute, private HomeService: HomeService, private formBuilder: FormBuilder, private router: Router) { }
//
//   ngOnInit() {
//
//     this.setForm()
//   }
//
//   onSubmit() {
//     if (this.editForm.invalid || this.isLoading) {
//       return;
//     }
//     this.isLoading = true;
//     this.HomeService.updateProduct(this.editForm.value).subscribe(x => {
//         this.isLoading = false;
//         this.modal.close('Yes');
//       },
//       error => {
//         this.isLoading = false;
//       });
//   }
//
//   get editFormData() { return this.editForm.controls; }
//
//   private setForm() {
//     console.log(this.selectedProduct);
//
//     this.editForm = this.formBuilder.group({
//       id: [this.selectedProduct.id],
//       firstName: [this.selectedProduct.firstName, Validators.required],
//       lastName: [this.selectedProduct.lastName, Validators.required],
//       email: [{ value: this.selectedProduct.email, disabled: true }, [Validators.email, Validators.required]],
//       mobileNumber: [this.selectedProduct.mobileNumber, Validators.required]
//     });
//   }
// }
