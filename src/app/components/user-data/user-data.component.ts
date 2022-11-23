import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  userFields = {
    name: '',
    last_name: '',
  };
  name_req: boolean = false;
  last_n_req: boolean = false;
  fieldsVerified: boolean = false;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  async verifyFields() {
    // Verify the fields are not empty
    this.userFields.name === '' ? this.name_req = true : this.name_req = false;
    this.userFields.last_name === '' ? this.last_n_req = true : this.last_n_req = false;
    if(this.name_req === true ||
      this.last_n_req === true) {
        this.fieldsVerified = true;
      } else {
        const newUserData: User = {
          id_auth: localStorage.getItem('idUserLogged') || '',
          name: this.userFields.name,
          last_name: this.userFields.last_name,
          favorites: [],
          products: [],
          rol: 'user'
        };
        try {
          await this.usersService.createUser(newUserData);
          this.router.navigate(['/'])
        } catch (e) {
          console.error(e);
        }
      }
  }
}
