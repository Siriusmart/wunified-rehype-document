import { UntypedProcessor, WUnifiedPlugin } from "wp-unified"
import rehypeDocument from "rehype-document"

export default class WRehypeDocument extends WUnifiedPlugin {
    apply(processor: UntypedProcessor, options: any): UntypedProcessor {
        if (options === undefined)
            return processor.use(rehypeDocument)
        else
            return processor.use(rehypeDocument, options)
    }
}
