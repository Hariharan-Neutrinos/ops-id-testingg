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
export class deleteEntity1ById {
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
    this.serviceName = 'deleteEntity1ById';
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
      instance = new deleteEntity1ById(
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
    //appendnew_flow_deleteEntity1ById_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: deleteEntity1ById');
    //appendnew_flow_deleteEntity1ById_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: deleteEntity1ById');

    this.app['post'](
      `${this.serviceBasePath}/dm/erd/entity_1/delete-by-id`,
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
          bh = await this.sd_B3Qci5dMhVLXOtKX(bh, parentSpanInst);
          //appendnew_next_sd_PFobpC9MjcQt0wmY
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_PFobpC9MjcQt0wmY');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_deleteEntity1ById_HttpIn
  }
  //   service flows_deleteEntity1ById

  //appendnew_flow_deleteEntity1ById_start

  async sd_B3Qci5dMhVLXOtKX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_B3Qci5dMhVLXOtKX',
      parentSpanInst
    );
    try {
      this.sdService.addDMPropertiesToBh(bh, bh.web.req, 'entity_1');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_eMglZeKptec2w49x(bh, parentSpanInst);
      //appendnew_next_sd_B3Qci5dMhVLXOtKX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_B3Qci5dMhVLXOtKX',
        spanInst,
        'sd_B3Qci5dMhVLXOtKX'
      );
    }
  }

  async sd_eMglZeKptec2w49x(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eMglZeKptec2w49x',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_MsveiTdT4FSAQYZr');
      bh.result = await dmUtilsInst.delete('_EN_0yr9cbpxpn', bh.filter);

      this.tracerService.sendData(spanInst, bh);
      await this.sd_IpUaU51q741upXgr(bh, parentSpanInst);
      //appendnew_next_sd_eMglZeKptec2w49x
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eMglZeKptec2w49x',
        spanInst,
        'sd_eMglZeKptec2w49x'
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
  //appendnew_flow_deleteEntity1ById_Catch
}
