import rehypeDocument from "rehype-document"
import { UntypedProcessor, WUnifiedPlugin } from "wp-unified"

export default class WRehypeDocument extends WUnifiedPlugin {
    apply(processor: UntypedProcessor, options: any): UntypedProcessor {
        if (options === undefined)
            return processor.use(rehypeDocument)
        else
            return processor.use(rehypeDocument, options)
    }
}
