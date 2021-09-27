import { exec } from "child_process";

export default class Commander {

    async static GET_STATUS_SERVICES() {
        await new Promise((resolve, reject) => {
            exec(`sudo service --status-all`, (error, stdout, stderr) => {
                if(error) throw error;
                if (stdout) resolve(stdout)
                if (stderr) resolve(stderr)
                else reject()
            })
          }).then(res = res.json())
    }
}