import {SITE} from '@/lib/config';
export default function Subscribe(){return(<form className="cap" action={`mailto:${SITE.email}`} method="post" encType="text/plain"><input name="Join ABOOWE list" type="email" required placeholder="Email address" aria-label="Email address"/><button className="btn">Join the list</button></form>)}
