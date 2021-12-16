<h2>Full Stack Developer Bootcamp Bank OCBC NISP X Hacktiv8 : Angular Session</h2>
<ol>
    <li>
        <h4>Session 1:</h4><br />
        <ul>
            <li>Learn about Javascrpt Intro, Conditional, Looping and Array</li><br />
            <li>Do assignment 1</li>
        </ul>
    </li>
    <li>
        <h4>Session 2:</h4><br />
        <ul>
            <li>Learn about Javascipt Object, Function and jQuery DOM</li>
        </ul>
    </li>
    <li>
        #### Session 3:
    </li>
</ol>

@Injectable()
export class AuthInterceptor
  implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // Ambil data dari AuthService
    const authToken = this.auth.getAuthorizationToken()

    // Clone request, lalu isi Authorization sebagai salah satu HTTP Header
    request = request.clone({ setHeaders: { Authorization: `Bearer ${authToken}` } })

    return next.handle(request);
  }
}


# Main App Settings
PORT=3000
FASTIFY_IGNORE_WATCH="node_modules .git logs/error.log ldb.* sandbox"

# Cookie
COOKIE_SECRET="Trade-Surrogate-Tinsel-Relocate-Fidelity-Semantic-Creed-Payroll-Ahead-Slouching-Clay-Poser-Peroxide-Sixth5-Umbilical"
TOKEN_COOKIE="appToken"
COOKIE_SECURE=false
COOKIE_HTTP_ONLY=false
COOKIE_SIGNED=false

# CORS
ORIGINS="localhost,.*"

# JWT
JWT_SECRET="Paycheck-Runny-Spout-Hydrogen-Entrap-Molehill-Plywood-Smelting-Subtitle4-Equator-Ashy-Huff-Showgirl-Hamburger-Unrigged"

# Google Client Auth
GCID="1009634133543-n04d2tkkih0pf9el00376huu6gvg2l0m.apps.googleusercontent.com"

# PostgreSQL via Sequelize
DB_DEV_URL="postgres://postgres:Groom~Resupply~Kangaroo0~Winnings~Mural~Cobalt~Unified@db.pbxrrlxlvgpkhlueinnh.supabase.co:5432/postgres"
DB_PROD_URL="postgres://postgres:Groom~Resupply~Kangaroo0~Winnings~Mural~Cobalt~Unified@db.pbxrrlxlvgpkhlueinnh.supabase.co:5432/postgres"
