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
export class deleteAllEntity1S {
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
    this.serviceName = 'deleteAllEntity1S';
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
      instance = new deleteAllEntity1S(
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
    //appendnew_flow_deleteAllEntity1S_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: deleteAllEntity1S');
    //appendnew_flow_deleteAllEntity1S_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: deleteAllEntity1S');

    this.app['post'](
      `${this.serviceBasePath}/dm/erd/entity_1/delete-all`,
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
          bh = await this.sd_WZCH9P9qCQ53Uo0C(bh, parentSpanInst);
          //appendnew_next_sd_wSFFA6vtCXeEEUcH
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_wSFFA6vtCXeEEUcH');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_deleteAllEntity1S_HttpIn
  }
  //   service flows_deleteAllEntity1S

  //appendnew_flow_deleteAllEntity1S_start

  async sd_WZCH9P9qCQ53Uo0C(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WZCH9P9qCQ53Uo0C',
      parentSpanInst
    );
    try {
      this.sdService.addDMPropertiesToBh(bh, bh.web.req, 'entity_1');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_C3CsdSDmihKC1Fon(bh, parentSpanInst);
      //appendnew_next_sd_WZCH9P9qCQ53Uo0C
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WZCH9P9qCQ53Uo0C',
        spanInst,
        'sd_WZCH9P9qCQ53Uo0C'
      );
    }
  }

  async sd_C3CsdSDmihKC1Fon(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_C3CsdSDmihKC1Fon',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_MsveiTdT4FSAQYZr');
      bh.result = await dmUtilsInst.delete('_EN_0yr9cbpxpn', bh.filter);

      this.tracerService.sendData(spanInst, bh);
      await this.sd_IpUaU51q741upXgr(bh, parentSpanInst);
      //appendnew_next_sd_C3CsdSDmihKC1Fon
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_C3CsdSDmihKC1Fon',
        spanInst,
        'sd_C3CsdSDmihKC1Fon'
      );
    }
  }

  async sd_IpUaU51q741upXgr(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IpUaU51q741upXgr');
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
  //appendnew_flow_deleteAllEntity1S_Catch
}
