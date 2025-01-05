
export default {
    port: 3000,

    form: {
        formOptions: {
            encoding: "utf-8",
            keepExtensions: true,
            uploadDir: "tmp/uploads",
        },

        /**
         * Nota about `form.errorHandler`:
         * 
         * This function is called if a parsing error occured while the request's body parsing.
         * 
         * You can use it to do some checks before returning the HTTP 400 error response (to customize the error message, for example).
         */

        // errorHandler: (err) => {
        //     if (err.code && err.code === 1009) {  // formidableErrors.biggerThanTotalMaxFileSize === 1009
        //         return "Your file is too big"
        //     }

        //     return err.message
        // },
    },

    // https: {
    //     key: "",
    //     cert: ""
    // },
}
