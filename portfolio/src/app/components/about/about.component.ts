import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  profile = {
    "name":"Samuel Ignacio Verazay",
    "about":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptate illum sint fugit exercitationem accusamus deserunt, nobis vel nemo eum architecto porro beatae quod, non iste totam aut? Ab, vero quo. Numquam, non commodi quasi assumenda inventore velit blanditiis ad, saepe vero tenetur quia unde eius odit maxime provident amet! Voluptatem aliquam quasi alias facilis illo id, maxime quos quis minima vitae aspernatur, quas incidunt vel. Doloremque ratione porro adipisci debitis, ducimus atque reprehenderit obcaecati a ut molestias molestiae assumenda repellendus asperiores? Iste aperiam necessitatibus qui perferendis voluptas, voluptatem mollitia rerum eaque quia. Ipsam enim veniam reiciendis ipsum, delectus sit!",
    "img":"data:image/jpeg;base64,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",
  };

  setProfileName (text:string){
    this.profile.name = text;
  }

  setProfileAbout (text:string){
    this.profile.about = text;
  }

  setProfileImage (image:string){
    this.profile.img = image;
  }

}