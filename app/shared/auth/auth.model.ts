import {Injectable} from "@angular/core";
import {NavController, Loading} from "ionic-angular/index";

/**
 * AuthModel where logged in user and token are defined
 * Author: Max Tuzzolino-Smith
 */

@Injectable()
export class AuthModel {
    // Kong identity endpoint
    public static server: string = "https://proxy.api.dev.auckland.ac.nz";
    public loading: Loading;

    // Logged in user details (access token + logged in user entity)
    public access_token: String;
    public expires_in: Number;

    constructor() {}

    public showLoading(text: string, nav: NavController) {
        if (this.loading) {
            this.loading.dismiss();
        }
        this.loading = Loading.create({
            content: text,
            spinner: 'dots'
        });

        nav.present(this.loading);
    }

    public dismissLoading() {
        //noinspection TypeScriptUnresolvedFunction
        this.loading.dismiss().then(() => this.loading = null);
    }
}