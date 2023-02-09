// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { Middleware } from '../../../middleware/Middleware'; //_splitter_
import * as settings from '../../../config/config'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import { DmUtils } from '../../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
//append_imports_end
export class findAllSeds {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'findAllSeds';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new findAllSeds(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_findAllSeds_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: findAllSeds');
    //appendnew_flow_findAllSeds_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: findAllSeds');

    this.app['post'](
      `${this.serviceBasePath}/dm/erd/sed/find-all`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_0grguYfj00JSLkeH(bh, parentSpanInst);
          //appendnew_next_sd_Rv4kjRulVI3x4kSi
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Rv4kjRulVI3x4kSi');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_findAllSeds_HttpIn
  }
  //   service flows_findAllSeds

  //appendnew_flow_findAllSeds_start

  async sd_0grguYfj00JSLkeH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0grguYfj00JSLkeH',
      parentSpanInst
    );
    try {
      this.sdService.addDMPropertiesToBh(bh, bh.web.req, 'sed');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.__operationNode__(bh, parentSpanInst);
      //appendnew_next_sd_0grguYfj00JSLkeH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        '___addToBh___',
        spanInst,
        'sd_0grguYfj00JSLkeH'
      );
    }
  }

  async __operationNode__(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      '__operationNode__',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_MsveiTdT4FSAQYZr');
      bh.result = await dmUtilsInst.find(
        '_EN_s3flkd0m0o',
        bh.filter,
        bh.offSet,
        bh.orderBy,
        bh.pageSize
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_IpUaU51q741upXgr(bh, parentSpanInst);
      //appendnew_next___operationNode__
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        '__operationNode__',
        spanInst,
        '__operationNode__'
      );
    }
  }

  async sd_IpUaU51q741upXgr(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, '__httpOutResult__');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(bh, e, src, parentSpanInst?, functionName?) {
    console.error(e);
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    throw e;
  }
  //appendnew_flow_findAllSeds_Catch
}
